import i18next from 'i18next';
import React from 'react';


export function ImmigrationWho() {
    return (<div>
        <h1>{i18next.t('Who can immigrate to Ukraine')}</h1>

        <p>
            {i18next.t('Definitive answer is given in Law on Immigration')}
            &nbsp;
            <a href="http://zakon.rada.gov.ua/go/2491-14" >http://zakon.rada.gov.ua/go/2491-14</a>
        </p>

        <ul>
            <li>{i18next.t('Person that is currently in marriage with Ukrainian citizen that was registered more than 2 years ago can get permanent residence permit')}</li>
            <li>{i18next.t('Everybody who has a parent or grandparent that was born or at least lived on territory that was part of Ukraine before 1991 can get permanent residence permit')}</li>
            <li>{i18next.t('Parents and children of Ukrainian citizens can get permanent residence permit')}</li>
            <li>{i18next.t('Ministries can petition for person to get residence permit on the grounds of national interest')}</li>
            <li>{i18next.t('Person of Ukrainian origin, their spouse and children can get permanent residence permit')}</li>
            <li>{i18next.t('Siblings that share both parents with Ukrainian citizen, grandchildren and grandparents of Ukrainian citizens can get permanent residence permit (subject to quotas)')}</li>
            <li>{i18next.t('People that invested 100 thousand dollars in Ukraine can get permanent residence permit (subject to quotas)')}</li>
            <li>{i18next.t('Scientists and cultural figures can get permanent residence permit on the grounds of national initirest if supported by petition from respective ministry (subject to quotas)')}</li>
            <li>{i18next.t('Highly qualified workers and specilists can get permanent residence permit (subject to quotas)')}</li>
            <li>{i18next.t('Spouse, parents and underage children of permanent residence permit holder can get permanent residence permit as well (subject to quotas)')}</li>
            <li>{i18next.t('Person that served for 3 years in Armed Forces can get permanent residence permit (subject to quotas)')}</li>
            <li>{i18next.t('Victims of human trafficing that lived in Ukraine for 3 years since moment they recognised as such (subject to quotas)')}</li>
            <li>{i18next.t('Person that renounces Ukrainian citizenship automatically gets permanent residence permit')}</li>
            <li>{i18next.t('If nothing applies to you - see "temporary stay" below"')}</li>
        </ul>
    </div>);
}

export function ImmigrationWhy() {
    return (<div>
        <h1>{i18next.t('Why would you get permanent residence permit?')}</h1>

        <p>
            {i18next.t('Permanent residence permit is issued to person that completed immigration procedure but are not quialified for citizenship or not interested in applying for it. Once immigrated and recieved residence permit, person is considered a resident and should no longer prove their rights to enter and reside in Ukraine. Document itself is up to renewal every 10 years (new ones) or when person is 25 and 45 years old (old ones). It is almost like citizenship, with few exceptions being voting rights, civil service and land rights. Permanet residents can apply for citizenship (under Article 9) after 5 years since immigration or 2 years since registering marriage with citizen.')}
        </p>
    </div>);
}


