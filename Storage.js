import { MMKV } from 'react-native-mmkv';

export const userStorage = new MMKV({
    id: 'user_storage'
})