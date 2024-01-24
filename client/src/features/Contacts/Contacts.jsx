import {
  Card,
  List,
  ListItem,
  Typography,
  ListItemPrefix,
} from "@material-tailwind/react";
import { HiHome, HiOutlinePhone, HiOutlineMapPin } from "react-icons/hi2";
import ContactsCard from "./ContactsCard";

import { useContacts } from "./useGetContacts";
//
function Contacts() {
  const { contacts } = useContacts();
  return (
    <div className="min-h-[calc(100dvh-14dvh)]  rounded-none flex items-center flex-col justify-center darkModeTop shadow-non w-full ">
      <Typography variant="h3">با ما به تماس شود</Typography>
      <ul>
        {contacts?.map((el) => (
          <li className="sm:grid sm:grid-cols-3 gap-4 py-6">
            <Typography variant="h6" className="flex w-64 items-center">
              <ListItemPrefix>
                <HiHome size={30} />
              </ListItemPrefix>

              <span className="font-normal uppercase">{el.name}</span>
            </Typography>
            <Typography className="flex w-64 items-center">
              <ListItemPrefix>
                <HiOutlineMapPin size={30} />
              </ListItemPrefix>

              <span className="font-normal uppercase"> {el.location}</span>
            </Typography>
            <Typography className="flex w-64 items-center">
              <ListItemPrefix>
                <HiOutlinePhone size={30} />
              </ListItemPrefix>
              <span className="font-normal uppercase">
                {el.phone || "078343434"}
              </span>
            </Typography>
          </li>
          // <ContactsCard item={el} key={el.id} />
        ))}
      </ul>
    </div>
  );
}

export default Contacts;
