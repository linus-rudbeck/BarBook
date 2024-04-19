import styles from "./FeaturesList.module.css";

export default function FeaturesList({ features }) {
  return (
    <ul className={styles.features}>
      {features.map((feature, index) => (
        <li key={index}>
          {feature}
        </li>
      ))}
    </ul>
  );
}