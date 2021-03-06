import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import { persistStore, persistReducer, FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import contactsReducer from './contacts/contacts-reducer';
import { authReducer } from './auth';
import { currencyReducer } from './currency';

const middleware = [
    ...getDefaultMiddleware({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER ],
        }
    })
]

const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
}

const currencyPersistConfig = {
    key: 'currencyBase',
    storage,
    whitelist: ['baseCurrency', 'currencyAr'],
}


const store = configureStore({
    reducer: {
        contacts: contactsReducer,
        auth: persistReducer(authPersistConfig, authReducer),
        currency: persistReducer(currencyPersistConfig, currencyReducer)
    },
    middleware,
    devTools: process.env.NODE_ENV === 'development',
})

const persistor = persistStore(store);

export default { store, persistor }