import { useEffect, useRef, useState } from "react";
import "./SidebarStyles.css";

import { CSSTransition, TransitionGroup } from "react-transition-group";
import {
  Card,
  Typography,
  List,
  ListItem,
  ListItemPrefix,
  ListItemSuffix,
  Chip,
  Accordion,
  AccordionHeader,
  AccordionBody,
  Alert,
} from "@material-tailwind/react";
import {
  PresentationChartBarIcon,
  ShoppingBagIcon,
} from "@heroicons/react/24/solid";
import {
  ChevronRightIcon,
  ChevronDownIcon,
  CubeTransparentIcon,
} from "@heroicons/react/24/outline";
import Luiz from "../../assets/imagens/luizhenrique.png";
import { FaLinkedinIn } from "react-icons/fa";
import { IoMailUnreadOutline } from "react-icons/io5";
import { Link } from "react-router-dom";

const textOptions = ["Front-end", "Back-end", "Fullstack"];

export function Sidebar() {
  const [open, setOpen] = useState(1);
  const [openAlert, setOpenAlert] = useState(true);
  const [displayTextIndex, setDisplayTextIndex] = useState(0);

  const nodeRef = useRef(null);

  const handleOpen = (value) => {
    setOpen((prevOpen) => (prevOpen === value ? 0 : value));
  };

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayTextIndex((prevIndex) => (prevIndex + 1) % textOptions.length);
    }, 5000);

    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return (
    <Card
      className="fixed left-0 top-0 h-[100vh] w-full max-w-[18rem] p-2 shadow-xl shadow-xl shadow-secondary bg-transparent hidden  rounded-none"
      style={{ overflowY: "auto" }}
    >
      <div className="mb-2 flex items-center gap-4 p-4">
        <img src={Luiz} alt="brand" className="w-14 h-14 rounded-full" />
        <div className="text-left mb-5">
          <Typography variant="h5" className="text-text">
            Luiz Henrique
          </Typography>
          <TransitionGroup>
            <CSSTransition
              key={displayTextIndex}
              timeout={0}
              classNames="fade"
              nodeRef={nodeRef}
            >
              <p className="proficao absolute" ref={nodeRef}>
                {textOptions[displayTextIndex]}
              </p>
            </CSSTransition>
          </TransitionGroup>
        </div>
      </div>
      <List className="text-text">
        <Accordion
          open={open === 1}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 1 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 1}>
            <AccordionHeader
              onClick={() => handleOpen(1)}
              className={`border-b-0 p-3 text-text ${
                open === 1 ? "text-text" : ""
              }`}
            >
              <ListItemPrefix>
                <PresentationChartBarIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal">Navegação</Typography>
            </AccordionHeader>
          </ListItem>
          <AccordionBody className="py-1">
            <List className="p-0 text-text">
              <ListItem className=" ">
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                <Link to="/">Home</Link>
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                Sobre
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                Experiência
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                Educação
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <Accordion
          open={open === 2}
          icon={
            <ChevronDownIcon
              strokeWidth={2.5}
              className={`mx-auto h-4 w-4 transition-transform ${
                open === 2 ? "rotate-180" : ""
              }`}
            />
          }
        >
          <ListItem className="p-0" selected={open === 2}>
            <AccordionHeader
              onClick={() => handleOpen(2)}
              className={`border-b-0 p-3 text-text ${
                open === 2 ? "text-text" : ""
              }`}
            >
              <ListItemPrefix>
                <ShoppingBagIcon className="h-5 w-5" />
              </ListItemPrefix>
              <Typography className="mr-auto font-normal ">Serviços</Typography>
            </AccordionHeader>
          </ListItem>

          <AccordionBody className="py-1">
            <List className="p-0 text-text">
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5 " />
                </ListItemPrefix>
                Orders
              </ListItem>
              <ListItem>
                <ListItemPrefix>
                  <ChevronRightIcon strokeWidth={3} className="h-3 w-5" />
                </ListItemPrefix>
                Products
              </ListItem>
            </List>
          </AccordionBody>
        </Accordion>
        <hr className="my-2 border-gray-900" />
        <ListItem className="text-text">
          <ListItemPrefix>
            <IoMailUnreadOutline className="h-5 w-5" />
          </ListItemPrefix>
          Email
          <ListItemSuffix>
            <Chip
              value="14"
              size="sm"
              variant="ghost"
              className="rounded-full bg-text"
            />
          </ListItemSuffix>
        </ListItem>
        <ListItem className="text-text">
          <ListItemPrefix>
            <FaLinkedinIn className="h-5 w-5" />
          </ListItemPrefix>
          LinkedIn
        </ListItem>
      </List>
      <Alert
        open={openAlert}
        className="mt-auto pl-5"
        onClose={() => setOpenAlert(false)}
      >
        <CubeTransparentIcon className="mb-4 h-12 w-12 " />
        <Typography variant="h6" className="mb-1 text-left">
          Me mande um email
        </Typography>
        <Typography
          variant="small"
          className="font-normal opacity-80 text-left"
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Labore
          necessitatibus omnis ducimus?
        </Typography>
        <div className="mt-4 flex gap-3 justify-start">
          <Typography
            as="a"
            href="#"
            variant="small"
            className="font-medium opacity-80"
            onClick={() => setOpenAlert(false)}
          >
            Enviar
          </Typography>
          <Typography as="a" href="#" variant="small" className="font-medium">
            Fale comigo
          </Typography>
        </div>
      </Alert>
    </Card>
  );
}
