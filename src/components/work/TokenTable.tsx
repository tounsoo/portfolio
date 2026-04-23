import styles from "./TokenTable.module.css";

interface TokenRow {
  name: string;
  value: string;
  resolved: string;
  usage: string;
}

interface TokenTableProps {
  tokens: TokenRow[];
}

export default function TokenTable({ tokens }: TokenTableProps) {
  return (
    <div className={styles.wrapper}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th>Swatch</th>
            <th>Token</th>
            <th>Value</th>
            <th>Usage</th>
          </tr>
        </thead>
        <tbody>
          {tokens.map((token) => (
            <tr key={token.name}>
              <td>
                <span
                  className={styles.swatch}
                  style={{ backgroundColor: token.resolved }}
                  title={token.resolved}
                />
              </td>
              <td>
                <code className={styles.tokenName}>{token.name}</code>
              </td>
              <td>
                <code className={styles.value}>{token.value}</code>
              </td>
              <td className={styles.usage}>{token.usage}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
