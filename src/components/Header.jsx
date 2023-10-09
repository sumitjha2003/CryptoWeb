import { Button, HStack } from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";
import {FaHome} from "react-icons/fa";
import {BsCurrencyExchange} from "react-icons/bs";
import {FaBtc} from "react-icons/fa";

const Header = () => {
  return (
    <HStack spacing={'auto'} p={"4"} shadow={"base"} bgColor={"blackAlpha.900"}>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/"><FaHome /></Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/exchanges"><BsCurrencyExchange /></Link>
      </Button>
      <Button variant={"unstyled"} color={"white"}>
        <Link to="/coins"><FaBtc /></Link>
      </Button>
    </HStack>
  );
};

export default Header;
