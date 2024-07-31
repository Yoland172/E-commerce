import React, { useState } from 'react';
import styles from './SignOut.module.scss';
import LinkElement from '@components/ui/linkElement/LinkElement';
import PopUp from '@components/ui/PopUp/PopUp';

interface SignOutProp {
    exit: () => void;
}

const SignOut = ({ exit }: SignOutProp) => {
    const [activePopUp, setActivePopUp] = useState<boolean>(false);

    return (
        <>
            <button
                className={styles.button}
                onClick={() => {
                    setActivePopUp(true);
                }}
            >
                Sign out
            </button>
            <PopUp active={activePopUp} setActive={setActivePopUp}>
                <div className={styles.main}>
                    <h2>Do you really want to exit?</h2>
                    <h3>
                        Unfortunately, after exiting the account, your information specified on the site will not be
                        saved
                    </h3>
                    <div className={styles.buttonContainer}>
                        <button
                            onClick={() => {
                                setActivePopUp(false);
                            }}
                        >
                            Cancel
                        </button>
                        <button
                            className={styles.exitButton}
                            onClick={() => {
                                exit();
                                setActivePopUp(false);
                            }}
                        >
                            Exit
                        </button>
                    </div>
                </div>
            </PopUp>
        </>
    );
};

export default SignOut;
