import {
  Bell,
  BookmarkSimple,
  DotsThreeCircle,
  Envelope,
  FileText,
  Hash,
  House,
  Pencil,
  User,
} from "@phosphor-icons/react";

import {
  Sidebar,
  LogoImg,
  NewTweet,
  MainNavigation,
  Link,
  NavLink,
} from "./styles";

import twitterLogo from "../../assets/logo-twitter.svg";

export function SideBar() {
  return (
    <Sidebar>
      <LogoImg src={twitterLogo} alt="Logo" />

      <MainNavigation>
        <NavLink to="/">
          <House width={"2rem"} height={"2rem"} weight="fill" />

          <span className="link-text">Home</span>
        </NavLink>

        <Link href="http://">
          <Hash width={"2rem"} height={"2rem"} />

          <span className="link-text">Explore</span>
        </Link>

        <Link href="http://">
          <Bell width={"2rem"} height={"2rem"} />

          <span className="link-text">Notifications</span>
        </Link>

        <Link href="http://">
          <Envelope width={"2rem"} height={"2rem"} />

          <span className="link-text">Messages</span>
        </Link>

        <Link href="http://">
          <BookmarkSimple width={"2rem"} height={"2rem"} />

          <span className="link-text">Bookmarks</span>
        </Link>

        <Link href="http://">
          <FileText width={"2rem"} height={"2rem"} />

          <span className="link-text">Lists</span>
        </Link>

        <Link href="http://">
          <User width={"2rem"} height={"2rem"} />

          <span className="link-text">Profile</span>
        </Link>

        <Link href="http://">
          <DotsThreeCircle width={"2rem"} height={"2rem"} />

          <span className="link-text">More</span>
        </Link>
      </MainNavigation>

      <NewTweet type="button">
        <Pencil
          className="button-icon"
          width={"1.5rem"}
          height={"1.5rem"}
          display="none"
        />

        <span className="button-text">Tweet</span>
      </NewTweet>
    </Sidebar>
  );
}
