"use client";

export default function Layout({ children }) {
  return (
    // <main className={style.sign_in}>
    //   <div className={style.catchphrase}>
    //     <div className={style.brand_name}>리딩게이트</div>
    //     <div className={style.sentence}>읽는 즐거움, 커가는 영어실력</div>
    //   </div>
    //   <LogInBox>
    //     <Nav>
    //       <Link href="/account/sign-in/personal-member">
    //         <NavItem active={connectPersonalMember}>개인 회원</NavItem>
    //       </Link>
    //       <Link href="/account/sign-in/group-member">
    //         <NavItem active={connectGroupMember}>
    //           그룹 회원{" "}
    //           <span style={{ fontSize: "0.8em", fontWeight: 500 }}>
    //             (학교, 학원)
    //           </span>
    //         </NavItem>
    //       </Link>
    //     </Nav>
    //     {children}
    //   </LogInBox>
    // </main>
    <>{children}</>
  );
}
