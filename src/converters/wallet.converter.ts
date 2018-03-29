import { Injectable } from '@angular/core';
import { Converter } from './converter';
import { Wallet } from "../model/wallet";

@Injectable()
export class WalletConverter implements Converter<Wallet> {

    from(object: Wallet) {
        throw new Error("Method not implemented.");
    }

    to(dados: any, id?: any): Wallet {
        let wallet: Wallet = new Wallet();
        wallet.hash = dados.hash;
        wallet.userId = dados.userId;
        wallet.createdAt = dados.createdAt ? new Date(dados.createdAt) : null;
        return wallet;
    }
}