import React, { useEffect, useState } from "react";

const Pagination = ({ allItems, setCurrentItems }) => {
  const [curPag, setCurPag] = useState(1);
  const [before, setBefore] = useState(0);
  const [current, setCurrent] = useState(0);
  const [after, setAfter] = useState(allItems.length);
  const maxItems = 9;
  const pagbtns = Math.ceil(allItems.length / 9);

  const pagination = [];

  for (let i = 1; i <= pagbtns; i++) {
    pagination.push(i);
    // console.log(pagination);
  }

  const movePag = (pag) => {
    const dif = pag - curPag;
    let itemDif = 0;
    setCurPag(pag);
    console.log(pag);
    let numNewItems = 0;

    if (dif > 0) {
      numNewItems = dif * maxItems;
      itemDif = (dif - 1) * maxItems;
      console.log(numNewItems);
      if (numNewItems < after) {
        console.log(before, current, after);
        console.log(
          allItems.slice(before + current + itemDif, before + numNewItems)
        );
        console.log(allItems.slice(0, 3));
        setCurrentItems(
          allItems.slice(
            before + current + itemDif,
            before + current + numNewItems
          )
        );
        setAfter(after - numNewItems);
        setBefore(before + numNewItems);
      } else {
        // console.log(allItems.slice((before + current), (before + current + after-1)));
        console.log(before, current, after);
        setCurrentItems(
          allItems.slice(before + current + itemDif, before + current + after)
        );
        setAfter(0);
        setBefore(allItems.length);
      }
    } else if (dif < 0) {
      numNewItems = dif * -1 * maxItems;
      itemDif = (dif - 1) * maxItems * -1;
      if (numNewItems < before) {
        setAfter(after + numNewItems);
        console.log(123);
        setBefore(before - numNewItems);
        setCurrentItems(allItems.slice(before - numNewItems, before - itemDif));
      } else {
        setAfter(allItems.length);
        setBefore(0);
        console.log(54);
        if (before - itemDif >= 9) {
          setCurrentItems(allItems.slice(0, before - itemDif));
        } else {
          setCurrentItems(allItems.slice(0, 9));
        }
      }
    }
    setCurrent(numNewItems);
  };

  useEffect(() => {
    // console.log(allItems.slice(0,maxItems));
    setCurrentItems(allItems.slice(0, maxItems));
    setCurrent(maxItems);
    setAfter(after - current);
  }, []);

  return (
    <div>
      {pagination.map((i) => {
        return (
          <button className="btn" onClick={() => movePag(i)}>
            {i}
          </button>
        );
      })}
    </div>
  );
};

export default Pagination;
