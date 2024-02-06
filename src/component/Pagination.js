import React from "react";
import { Button, IconButton } from "@material-tailwind/react";
import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

const Pagination = ({ active, onPageChange }) => {
  const totalPages = 10; // Assuming there are 10 pages in total
  const numButtonsToShow = 5; // Number of buttons to show excluding ellipses

  const getItemProps = (index) => ({
    variant: "text",
    color: active === index ? "blue" : "gray",
    onClick: () => onPageChange(index),
    className: active === index ? "border-2 w-[30px] border-blue-500 text-blue-500 rounded p-2" : "border-2 w-[30px]  border-gray-300 text-gray-300 rounded p-2",
  });

  const next = () => {
    if (active === totalPages) return;
    onPageChange(active + 1);
  };

  const prev = () => {
    if (active === 1) return;
    onPageChange(active - 1);
  };

  const renderButtons = () => {
    const buttons = [];

    for (let i = 1; i <= totalPages; i++) {
      buttons.push(
        <IconButton key={i} {...getItemProps(i)}>
          {i}
        </IconButton>
      );
    }

    if (totalPages > numButtonsToShow) {
      buttons.splice(
        numButtonsToShow,
        totalPages - numButtonsToShow,
        <span key="ellipsis">...</span>
      );
    }

    return buttons;
  };

  return (
    <div className="flex items-center gap-4">
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={prev}
        disabled={active === 1}
      >
        <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" /> Previous
      </Button>
      <div className="flex items-center gap-2">
        {renderButtons()}
      </div>
      <Button
        variant="text"
        className="flex items-center gap-2"
        onClick={next}
        disabled={active === totalPages}
      >
        Next
        <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default Pagination;
