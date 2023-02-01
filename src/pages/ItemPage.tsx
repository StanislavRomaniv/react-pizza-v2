import { FC } from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Card from '../components/Content/Card';

type ItemPageRouteParams = {
    id: string;
};

const ItemPage: FC = () => {
    const navigate = useNavigate();
    const { id } = useParams<ItemPageRouteParams>();
    const [item, setItem] = useState();

    useEffect(() => {
        const fetchItem = async () => {
            if (id) {
                try {
                    const res = await axios.get(`https://63a5e35df8f3f6d4ab02601e.mockapi.io/items/${id.match(/\d+/g)![0]}`);
                    setItem(res.data.items);
                } catch (error) {
                    alert('Pizza`s not found. Please, try again');
                    navigate('/');
                }
            }
        };

        fetchItem();
    }, [id, navigate]);

    if (!item) {
        return <>Download...</>;
    }

    return <Card props={item} component={'page'} />;
};

export default ItemPage;
