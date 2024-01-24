import { Card, List, ListItem } from "@material-tailwind/react";
function ContactsCard({ item }) {
  return (
    <Card className="rounded-md shadow-none darkModeMiddle w-full  h-40 sm:w-[30rem] p-3">
      <List>
        <ListItem translate="yes"> {item.name}</ListItem>
        <ListItem>{item.location}</ListItem>
        <ListItem>{item.phone || "078343434"}</ListItem>
      </List>
    </Card>
  );
}

export default ContactsCard;
