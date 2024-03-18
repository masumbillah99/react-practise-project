import { useState } from "react";
import FavoriteBar from "./FavoriteBar";
import FavoriteListModal from "./FavoriteListModal";
import Logo from "./Logo";
import Search from "./Search";

export default function Header() {
  const [showFavModal, setShowFavModal] = useState(false);

  return (
    <header className="fixed w-full right-0 top-0 z-50 bg-gradient-to-b from-black/60 to-black/0 pb-10">
      <nav className="container flex items-center justify-between py-6">
        <Logo />

        <div className="flex items-center gap-4 relative">
          <Search />
          <FavoriteBar onShow={() => setShowFavModal(!showFavModal)} />
          {showFavModal && <FavoriteListModal />}
        </div>
      </nav>
    </header>
  );
}
