import NameSpaces from "@/components/namespaces/namespaces";
import Room1 from "@/components/rooms/room1";
import Room2 from "@/components/rooms/room2";
import Image from "next/image";

export default function Home() {
  return (
    <main className="container mx-auto">
      <div className="flex">
        <NameSpaces />
        <div className="rooms bg-gray-700 min-h-screen text-white w-56">
          <div className="main-rooms">
            <h6 className="pointer cursor-pointer mt-2">
              <i className="room-caret fas fa-caret-down mr-2"></i>Rooms
            </h6>
            <ul className="room-list list-none transition-all duration-2000">
              <li className="cursor-pointer">
                <span className="glyphicon glyphicon-lock mr-1"></span>Main Room
              </li>
              <li className="cursor-pointer">
                <span className="glyphicon glyphicon-globe mr-1"></span>
                Meeting Room
              </li>
            </ul>
          </div>
          <div className="dm">
            <h6 className="pointer cursor-pointer mt-2">
              <i className="room-caret fas fa-caret-down mr-2"></i>Direct
              Messages
            </h6>
            <ul className="room-list list-none transition-all duration-2000">
              <li className="cursor-pointer">
                <span className="glyphicon glyphicon-lock mr-1"></span>Main Room
              </li>
              <li className="cursor-pointer">
                <span className="glyphicon glyphicon-globe mr-1"></span>
                Meeting Room
              </li>
            </ul>
          </div>
        </div>
        <div className="chat-panel flex-1 bg-gray-800 relative pt-2">
          <Room1 />
          <Room2 />

          <div className="room-header flex justify-between items-center px-4 py-2 bg-gray-900">
            <div className="flex items-center">
              <span className="curr-room-text text-white text-xl">
                Current Room
              </span>
              <span className="curr-room-num-users text-gray-400 text-sm ml-4">
                Users <span className="fas fa-user"></span>
              </span>
            </div>
            <div className="search relative">
              <span className="glyphicon glyphicon-search absolute left-6 top-2 text-gray-400"></span>
              <input
                type="text"
                id="search-box"
                placeholder="Search"
                className="pl-8 py-1 text-gray-400 bg-gray-700 border border-gray-600 rounded-md"
              />
            </div>
          </div>
          <div className="message-form absolute bottom-0 w-full mb-2">
            <form id="message-form" className="w-full">
              <div className="w-full">
                <input
                  id="user-message"
                  type="text"
                  placeholder="Enter your message"
                  className="w-full h-10 text-gray-400 bg-gray-700 border border-gray-600 rounded-md pl-2"
                />
              </div>
            </form>
          </div>
          <ul
            id="messages"
            className="list-none m-0 p-0 text-gray-800 max-h-5/6 overflow-scroll"
          >
            <li className="flex items-start p-2">
              <div className="user-image">
                <img
                  src="https://via.placeholder.com/30"
                  className="rounded-full"
                />
              </div>
              <div className="user-message ml-2 text-white">
                <div className="user-name-time">
                  rbunch <span className="text-gray-400">1:25 pm</span>
                </div>
                <div className="message-text text-gray-400">
                  I went running today.
                </div>
              </div>
            </li>
            <li className="flex items-start p-2">
              <div className="user-image">
                <img
                  src="https://via.placeholder.com/30"
                  className="rounded-full"
                />
              </div>
              <div className="user-message ml-2 text-white">
                <div className="user-name-time">
                  rbunch <span className="text-gray-400">2:25 pm</span>
                </div>
                <div className="message-text text-gray-400">
                  I'm getting my tires changed this afternoon.
                </div>
              </div>
            </li>
            <li className="flex items-start p-2">
              <div className="user-image">
                <img
                  src="https://via.placeholder.com/30"
                  className="rounded-full"
                />
              </div>
              <div className="user-message ml-2 text-white">
                <div className="user-name-time">
                  rbunch <span className="text-gray-400">2:29 pm</span>
                </div>
                <div className="message-text text-gray-400">
                  I like history.
                </div>
              </div>
            </li>
            <li className="flex items-start p-2">
              <div className="user-image">
                <img
                  src="https://via.placeholder.com/30"
                  className="rounded-full"
                />
              </div>
              <div className="user-message ml-2 text-white">
                <div className="user-name-time">
                  rbunch <span className="text-gray-400">2:59 pm</span>
                </div>
                <div className="message-text text-gray-400">
                  What day is tomorrow?
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}
