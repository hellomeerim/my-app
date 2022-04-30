import React from 'react';
import s from './SideBar.module.css';

const SideBar = (props) => {
    return (
        <>
            <div className={s.sidebar}>
        <div className={s.atc}>
            <div className={s.block1}>
                <p className={s.atc1}>АТС - 29 4 этаж</p>
                <p className={s.atc2}>Какое то описание</p>
            </div>

        </div>
        {/*<div>*/}
        {/*    <p>Адм. офис 3 этаж</p>*/}
        {/*    <p>Какое-то описание</p>*/}
        {/*</div>*/}
        {/*    <div>*/}
        {/*        <p>ОР конф. зал</p>*/}
        {/*        <p>Какое-то описание</p>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <p>Адм. офис 3 этаж</p>*/}
        {/*        <p>Какое-то описание</p>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <p>ОР конф. зал</p>*/}
        {/*        <p>Какое-то описание</p>*/}
        {/*    </div>*/}
        {/*    <div>*/}
        {/*        <p>Адм. офис 3 этаж</p>*/}
        {/*        <p>Какое-то описание</p>*/}
        {/*    </div>*/}
            </div>
        </>
    );
};

export default SideBar;