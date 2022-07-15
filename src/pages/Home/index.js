import React, {useState, useEffect} from 'react';
import { View, Keyboard } from 'react-native';
import Map from '../../components/Map';
import Search from '../../components/Search';
import Details from '../../components/Details';
import Menu from '../../components/Menu';

import api from '../../services/api';

import styles from './styles';

function Home({navigation}) {

    const [search, setSearch] = useState("");
    const [showDetails, setShowDetails] = useState(false);
    const [order, setOrder] = useState({});
    const [origin, setOrigin] = useState({});

    const registerOrder = async () =>{
            if(search.length >= 6){
                Keyboard.dismiss()
                const {data} = await api.post('orders', {
                    refId: Number(search),
                })
                setOrder(data);
            }
        
    }

    useEffect(()=>{
        registerOrder();
    }, [search])


    const entrar = () => {
        navigation.reset({
            index: 0,
            routes: [{name: "Signin"}]
        })
    }
    return (
        <>
            <View style={styles.mapContainer}>
                <Map 
                    destination={order.location ? {
                        latitude: order.location.lat,
                        longitude: order.location.lng,
                    } : null}
                    onDirection={()=>{
                        setShowDetails(true);
                    }}
                    onOrigin={(origin)=>{
                        setOrigin(origin)
                    }}
                />
                <Search
                    value={search}
                    event={value => setSearch(value)}
                />
            </View>
            <Menu page="Home" navigation={navigation} />
            <Details 
                show={showDetails}
                details={{
                    ...order,
                    origin
                }}
                onClose={()=>{ 
                    setSearch("");
                    setOrder({});
                    setShowDetails(false);
                }}
            />
        </>
    )
}

export default Home;