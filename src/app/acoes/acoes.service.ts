import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment'
import { Acao, Acoes, AcoesApi } from './modelo/acoes';
import { map, pluck, tap } from 'rxjs/operators';

const API = environment.api;

@Injectable({
    providedIn: 'root'
})
export class AcoesService { 

    constructor( private httpClient: HttpClient) { }

    getAcoes(){
        return this.httpClient
            .get<any>(API + '/acoes')
            .pipe(
                tap((valor) => console.log(valor)),
                pluck('payload'),
                map( (acoes: Acoes) => acoes                    
                        .sort(
                            (acaoA, acaoB) => this.ordenaPorCodigo(acaoA, acaoB)
                            )
                    )
            );
    }

    private ordenaPorCodigo(acaoA: Acao, acaoB: Acao){

        if(acaoA.codigo > acaoB.codigo) return 1;
        if(acaoA. codigo < acaoB.codigo) return -1;
        return 0;
    }

}