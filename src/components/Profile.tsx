import { useChallenges } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export default function Profile() {
    const { level } = useChallenges();
    return (
        <div className={styles.profileContainer}>
            <img src="https://github.com/lucianbinner.png" alt="Lucian Binner" />
            <div>
                <strong>Lucian Binner</strong>
                <p>
                    <img src="icons/level.svg" alt="" />
                    Level {level}
                </p>
            </div>
        </div>
    )
}
