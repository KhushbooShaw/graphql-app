import ClientOnly from "../components/ClientOnly";
import Users from "../components/Users/Users";
// import UsersV1 from "../components/Users/UsersV1";

export default function UserList() {
  return (
    <div>
      <main>
        <ClientOnly>
          <Users />
          {/*
           * The component to call the userlist of 2000 at once and
           * lazyLoad the initially called list on load more
           * <UsersV1 />
           */}
        </ClientOnly>
      </main>
    </div>
  );
}