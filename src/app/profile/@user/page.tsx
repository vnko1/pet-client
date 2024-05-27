import { UserForm, UserModal } from "./ui";

import profileStyles from "../profile.module.scss";
import userStyles from "./user.module.scss";
import { getMe } from "@/lib";

export default async function UserPage() {
  const user = await getMe(undefined);

  return (
    <>
      <div className={userStyles["user"]}>
        <h2 className={profileStyles["title"]}>My information:</h2>
        <div className="wrapper">
          <UserForm user={user} />
        </div>
      </div>
      <UserModal />
    </>
  );
}
