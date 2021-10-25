import { useCallback, useState } from "react";
import AppStateContext from "../contexts/AppStateContext";

const AppStateProvider = ({ children }) => {
  const [prototypes, setPrototypes] = useState([
    {
      id: "pp-1",
      title: "Product1",
      artist: "James Lee",
      desc: "Faksajelkjfs",
      thumbnail: "https://www.teamlab.art/images/pc-l/14591",
      price: 56,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
    {
      id: "pp-2",
      title: "Product2",
      artist: "Patric Yang",
      desc: "safesgas",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS2aRgkgP9dGwgj40AhV-e6VITfo4oft4PGUQEYyySk7XskwPJ3q11XcU2BrQHn_Jl7aHA&usqp=CAU",
      price: 24,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
    {
      id: "pp-3",
      title: "Product3",
      artist: "Chris Hamsworth",
      desc: "vxbteaebea",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTEpEm0L8MBWEDZHXoLof2bh5PYWlzy5DAwS0MJtBattYnamc5hazWuUb7OnPEAwgZdb5o&usqp=CAU",
      price: 47,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
    {
      id: "pp-4",
      title: "Product4",
      artist: "Edward Armin",
      desc: "srjsfgsejrse",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbMqk_Zb-xB9J3ty44PYY0an_PWZLCQsSCo0oVxDIr5xCjIxRdqv4oihYPG6I3uqfmFI8&usqp=CAU",
      price: 57,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
    {
      id: "pp-5",
      title: "Product5",
      artist: "Leona Valok",
      desc: "Faksajelkjfs",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSTuTHpYE5uMFhPyOWIo62K5FRtu0IoVN25Wj3IAbumdhaUR2DNKmlGoqsaDEdM9athRtY&usqp=CAU",
      price: 78,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
    {
      id: "pp-6",
      title: "Product6",
      artist: "Caitlyn Parker",
      desc: "safesgas",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4kOCh5iLHO88ZbFjr2DwObJqLW4pFADGX4AC1AlryddBu4MetcjyiWC8pA7uArNdNwz8&usqp=CAU",
      price: 35,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
    {
      id: "pp-7",
      title: "Product7",
      artist: "Amanda Williams",
      desc: "vxbteaebea",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRw3Xqz3G9hjoZOI7FBcUE9K1y4m6e5o1Xt7gqfcKzgQbe_RU9pBRZDBcQGx7J7kO84W7Q&usqp=CAU",
      price: 56,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
    {
      id: "pp-8",
      title: "Product8",
      artist: "Victoria Dorph",
      desc: "srjsfgsejrse",
      thumbnail:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTWLAMnvTPC2DbIgR-Hw6i3r7AC5cfzwwc1sP3wHDYNlg2SsOexcffIc0x-s1ts5lFd57I&usqp=CAU",
      price: 68,
      pieUrl: "https://cloud.protopie.io/p/7a0d6567d2",
    },
  ]);
  const [orders, setOrders] = useState([]);

  // [{id, quantity: 1}]
  const addToOrder = useCallback((id) => {
    setOrders((orders) => {
      const found = orders.find((order) => order.id === id);

      if (found === undefined) {
        return [...orders, { id, quantity: 1 }];
      } else {
        return orders.map((order) => {
          if (order.id === id) {
            return {
              id,
              quantity: order.quantity + 1,
            };
          } else {
            return order;
          }
        });
      }
    });
  }, []);
  const remove = useCallback((id) => {
    setOrders((orders) => {
      return orders.filter((order) => order.id !== id);
    });
  }, []);
  const removeAll = useCallback(() => {
    setOrders([]);
  }, []);

  return (
    <AppStateContext.Provider
      value={{
        prototypes,
        orders,
        addToOrder,
        remove,
        removeAll,
      }}
    >
      {children}
    </AppStateContext.Provider>
  );
};

export default AppStateProvider;
