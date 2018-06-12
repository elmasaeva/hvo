import i18next from 'i18next';
import React from 'react';

export function CitizenshipWho() {
    return (<div>
        <h1>{i18next.t('Who can get Ukrainian citizenship?')}</h1>

        <p>
            {i18next.t('Definitive answer is given in Law on Citizenship')}
            &nbsp;
            <a href="http://zakon.rada.gov.ua/go/2235-14" >http://zakon.rada.gov.ua/go/2235-14</a>
        </p>

        <p>
            {i18next.t('To sum it up - marriage for 2 years, army for 3 years, 5 years of residence or your grandparents were originally from here. Or maybe you were born here any have it already.')}
        </p>

        <ul>
            <li>{i18next.t('Citizen of USSR or stateless person that legally resided in Ukraine in 1991 is considered Ukrainian citizen')}</li>
            <li>{i18next.t('Children born on Ukrainian soil to parents who are permanent residents of Ukraine are considered Ukrainian citizens by birth (Article 7)')}</li>
            <li>{i18next.t('Children who have at least one parent who is Ukrainian citizen regardles of place of birth are considered Ukrainian citizens by birth (Article 7)')}</li>
            <li>{i18next.t('Children who`s both parents were stateless holders of residence permit in Ukraine regardles of place of birth are considered Ukrainian citizens by birth (Article 7)')}</li>
            <li>{i18next.t('Everybody who has a parent or grandparent that was born or at least lived on territory that was part of Ukraine before 1991 can become Ukrainian citizen (Article 8)')}</li>
            <li>{i18next.t('Person that is currently in marriage with Ukrainian citizen that was registered more than 2 years ago can apply for citizenship (Article 9)')}</li>
            <li>{i18next.t('Person that served for 3 years in Armed Forces can apply for citizenship (Article 9)')}</li>
            <li>{i18next.t('Person that immigrated to Ukraine (permamanent resident) can apply for citizenship after 5 years (Article 9)')}</li>
            <li>{i18next.t('Person that renounced Ukrainian citizenship can restore it (Article 10)')}</li>
            <li>{i18next.t('If nothing applies to you - see "immigration" below')}</li>
        </ul>

        <p>
            {i18next.t('There are however major differences in procedures between articles 7, 8 and 9. People who have it by birth go and ask authorities to register the fact, people who have ancestors can accept citizenship or not and everybody else asks President to grant them citizenship')}
        </p>
    </div>);
}

export function CitizenshipWhy() {
    return (<div>
        <h1>{i18next.t('Why would you get Ukrainian citizenship?')}</h1>

        <p>
            {i18next.t('There are number of reasons people apply for Ukrainian citizenship. Most obvious - if you want to stay in Ukraine longer than 90 days and be able to vote, work in government, buy land and travel on Ukrainian passport. For some people another reason to get Ukrainian citizenship is visa-free travel to European Union. That said, if you only need to stay in Ukraine longer than 90 years, you can as well apply for permanent residence permit (immigration) or temporary residence permit. You do not need citizenship or any residence permit to register business or become tax resident in Ukraine.')}
        </p>
    </div>);
}

function DocumentsNote() {
    return (<p>{i18next.t('All said documents should have apostille stamps or consular legalization, unless issued in Ukraine or former USSR countries, and have to be translated to Ukrainian as well, which means few more trips to Ukrainian embassy if it happens abroad. It is always cheaper to make certified translation in Ukraine and more convenient too, as translators ofter partner with notary public. Make sure that all names, places and dates match letter-to-letter across all documents.')}</p>);
}

function SubmitTo() {
    return(<p>
        {i18next.t('Documents can be submitted to local migration service branch that services your registered address or to consular service if you live abroad. When submitting documents, always make sure your application is written into big paper journal and assigned a number. You have a right to get written extract from journal and list of documents accepted by officer under Law on Access to Public Information, which authorities have five days to produce.')}
    </p>);
}

function Renounce() {
    return(<p>
        {i18next.t('If you already have citizenship of another country when applying for Ukrainian citizenship (except for citizens by birth), you are required to renounce it in two years. You would submit a written promise to do so along with your application for citizenship, so skipping on that promise would result in your citizenship being revoked as fraudlent. Law on Citizenship provides for citizens of countries that automatically revoke citizenship and asylees. Law also allows you to declare renunciation of citizenship without any proof from embassy in case when embassy of your country does not give any document in term specified by their law or in 2 years, if your country has no procedure to renounce citizenship or if procedure costs more than 70 US dollars.')}
    </p>);
}

function Fraud() {
    return (<p>
        {i18next.t('Beware of immigration lawyers that promise you any kind of fast-track procedure as this is thinly veiled bribe. Common tactics of corrupt authorities is to appear rude, uncooperative and giving you incompolete info or "freezing" your application so processing time would be barely less than maximum time allowed by law or not registering documents at all so there would be no way to enforce time limits or simply destroying your documents.')}
        &nbsp;
        {i18next.t('Beware of fraudlent documents. Because of war and loss of effective control over East and Crimea, there is a lot of unaccounted paper papssport forms in all sorts of hands. Since April 2018 paper passport books are no longer issued and replaced by modern id-cards and biometric passports, which can be verified with freely available software. Also note that all applications for citizenship and immigration should happen in your presence and all the documents should also be given to you personally, otherwise it can be nullified as fraudlent. Beware of fraud of immigration authories themselves and keep paper trail - always check written evidence that submitted documents were registered, otherwire they can claim to see you for the first time or that you only came for consultation and never submitted anything. Make all the copies certified by officer that accepted documents. When in doubt, call head of branch or call hotline and require written answers under Law on Access to Public Information (they would have five days to respond). When in trouble, escalate all the way to the head of migration service, remind officials that destruction, theft and tampering of official documents is criminal offence. After succesfully submitting documents you have a right to know status of your application, request copies of any documents and know their physical location.')}
        &nbsp;
        {i18next.t('If giving bribe is suggested - accept the offer and rat them out to anticorruption police to catch them rad-handed')}
    </p>);
}

function Sham() {
    return (<p>
        {i18next.t('Beware of sham marriages fraud. Immigration laweyrs and corrupt officials can promise you to make back-dated marriage or some fast-track procedure. Most likely they would simply sell you forged documents which would have paper trail back to you, which would open the door for any law enforcement agency to extrort even more bribes from you. Marriage, birth and death certificates issued in Ukraine can not be backdated, as they are recorded in digital registry that is used to cross-check your application, so any back-dated document is fraudlent one which would be discovered when cross-check happens. Before 2016 registering marriage would require 30 days prior notice, unless your to-be-wife is pregnant, so only way to fast-track procedure was to fake medical certificate, which again can be traced. At this moment there is legal way to register marriage without prior notice on same day.')}
    </p>);
}

export function CitizenshipHow() {
    return (<div>
        <h1>{i18next.t('How to get Ukrainian citizenship?')}</h1>

        <p>
            {i18next.t('All procedures and required documents are outlinied in presidents decree')} <a href="http://zakon.rada.gov.ua/go/215/2001" >http://zakon.rada.gov.ua/go/215/2001</a>
        </p>

        <h2>{i18next.t('By birth')}</h2>

        <p>
            {i18next.t('Citizens by birth (Article 7) have it pretty simple. Their parents just need birth certificate and own passports to prove either their Ukrainian citizenship or their legal status in Ukraine and that is it.')}
        </p>
        <DocumentsNote />
        <SubmitTo />

        <h2>{i18next.t('By territorial origin')}</h2>

        <p>
            {i18next.t('Citizens by territorial origin (Article 8) need to prove their origin i.e. that their parent or grandparent was born or lived in Ukraine and their connection to parent. In case when your maternal grandmother was born in Ukraine, that means her birth certificate, her marrigage certificate (if she changed surname), your mothers birth certificate and your mothers marriage certificate (in case she also changed surname), your birth certificate and passport. It is customary to change surnames back and forths few times in case of divorse and remarriage, which means finding all documents that trace that events.')}
        </p>
        <DocumentsNote />
        <Renounce />
        <SubmitTo />
        <Fraud />

        <h2>{i18next.t('By marriage or immigration')}</h2>
        <p>{i18next.t('See "immigration" first.')}</p>
        <p>
            {i18next.t('Most lengthy procedure is naturalisation (Article 9). You would need residence permit before applying and file petition with supporting documents to President to grant you citizenship which would be cross-checked by four levels of bureaucrats in migration service and president amdinistration after which President just rubber-stamps their decision, which is done in batches once in three to four months.')}
        </p>
        <p>
            {i18next.t('Before filing petition you need to get residence permit (see "immigration"), prove your finances (bank statement with equivalent of about two thousand dollars on you account), prove your Ukrainian language skills and prove that you have not commited grave crimes, war crimes and genocide in the country of your previous citizeship. When applying for citizenship by marriage, your need to submit a copy of your residence permit, marriage certificate and copy of passport of your spouse proving that they have Ukrainian citizenship at this moment. When applying by residence, you need to submit permanent residence permit issued five or more years ago.')}
        </p>
        <DocumentsNote />
        <Renounce />
        <SubmitTo />
        <Fraud />
        <Sham />
    </div>);
}

