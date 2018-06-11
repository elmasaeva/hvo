import i18next from 'i18next';
import React from 'react';

export function TemporaryWho () {
    return (<div>
        <h1>{i18next.t('Who can legally stay in Ukraine more than 90 days')}</h1>

        <p>
            {i18next.t('Definitive answer is given in Law on Foreign Citizens and Stateless People')}
            &nbsp;
            <a href="http://zakon.rada.gov.ua/go/3773-17" >http://zakon.rada.gov.ua/go/3773-17</a>
        </p>


        <ul>
            <li>{i18next.t('Person that is currently in marriage with Ukrainian citizen regardless of date it was registered can get temporary residence permit')}</li>
            <li>{i18next.t('Students, religious missionaries, journalists and employees of foreign companies and banks with branches in Ukraine can get temporary residence permit')}</li>
            <li>{i18next.t('Owner of company registered in Ukraine that contributed more than 100 thousand dollars to paid-in capital can get temporary residence permit')}</li>
            <li>{i18next.t('Employees of Ukrainian companies can get temporary resince permit for duration of their employment')}></li>
            <li>{i18next.t('Spouces and children of above-listed people cat get temporary permits as well')}</li>
        </ul>
    </div>);
}

export function TemporaryWhy () {
    return (<div>
        <h1>{i18next.t('Why would you get temporary residence permit?')}</h1>

        <p>
            {i18next.t('To stay in Ukraine for longer than 90 days in every 180 days foreign citizens need temporary permit. Most popular reasons are study, employment and marriage. You do not need residence permit to register company, buy property and pay taxes. For visits up to 90 days in every 180 days no permit is required.')}
        </p>
    </div>);
}

