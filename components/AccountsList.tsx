import { FlatList } from "react-native";
import AccountListItem from "./AccountListItem";

function AccountsList() {
  return (
    <>
      {/* <AccountListItem />
      <AccountListItem />
      <AccountListItem /> */}
      <FlatList
        data={[1, 2, 3, 4]}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <AccountListItem />}
      />
    </>
  );
}

// const enhance = withObservables([], () => ({
//   accounts: accountsCollection.query(),
// }));

export default AccountsList;
