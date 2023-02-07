import { CartPropsType } from '../components/Cart/Cart';

export const getDataFromLS = () => {
    const data = localStorage.getItem('cart');
    const parsedData: CartPropsType[] = data ? JSON.parse(data) : [];

    const totalPrice = parsedData.reduce((sum, obj) => obj.totalItemPrice + sum, 0);
    const totalCount = parsedData.reduce((sum, obj) => obj.count + sum, 0);

    return {
        items: parsedData,
        totalPrice,
        totalCount,
    };
};
