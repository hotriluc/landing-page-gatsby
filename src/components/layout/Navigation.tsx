import { AnimatePresence, motion } from 'framer-motion';
import { Link } from 'gatsby';
import React, { useState } from 'react';

import { Container, Flex } from '../../styles/Global.styles';
import {
  CloseNav,
  Nav,
  NavFooter,
  NavHeader,
  NavList,
  NavVideos,
} from '../../styles/Navigation.styles';

const navRoutes: { id: number; title: string; path: string; video: string }[] =
  [
    {
      id: 0,
      title: 'not humble',
      path: '/not-humble',
      video: 'featured-video.mp4',
    },
    {
      id: 1,
      title: 'bleeping easy',
      path: '/bleeping-easy',
      video: 'easy.mp4',
    },
    {
      id: 2,
      title: 'make it zero',
      path: '/make-it-zero',
      video: 'make-it-zero.mp4',
    },
    {
      id: 3,
      title: 'it takes an island',
      path: '/it-takes-an-island',
      video: 'it-takes-an-island.mp4',
    },
    {
      id: 4,
      title: '50 beaches',
      path: '/50-beaches',
      video: '50-beaches.mp4',
    },
  ];

export const Navigation = () => {
  const [revealVideo, setRevealVideo] = useState({
    show: false,
    video: 'featured-video.mp4',
    key: '0',
  });

  const video = require('../../assets/video/' + revealVideo.video);
  console.log(video);

  return (
    <Nav>
      <Container>
        <NavHeader>
          <Flex spaceBetween noHeight>
            <h2>Projects</h2>
            <CloseNav>
              <button>
                <span></span>
                <span></span>
              </button>
            </CloseNav>
          </Flex>
        </NavHeader>
        <NavList>
          <ul>
            {navRoutes.map((el) => (
              <motion.li
                key={el.id}
                onHoverStart={() => {
                  setRevealVideo({
                    show: true,
                    video: el.video,
                    key: el.id.toString(),
                  });
                }}
                onHoverEnd={() => {
                  setRevealVideo({
                    show: false,
                    video: el.video,
                    key: el.id.toString(),
                  });
                }}
              >
                <Link to={`/projects${el.path}`}>
                  <motion.div
                    initial={{ x: -108 }}
                    whileHover={{
                      x: -40,
                      transition: {
                        duration: 0.4,
                        ease: [0.6, 0.05, -0.01, 0.9],
                      },
                    }}
                    className="link"
                  >
                    <span className="arrow">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 101 57"
                      >
                        <path
                          d="M33 34H0V24h81.429L66 7.884 73.548 0l19.877 20.763.027-.029L101 28.618 73.829 57l-7.548-7.884L80.753 34H33z"
                          fill="#FFF"
                          fillRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    {el.title}
                  </motion.div>
                </Link>
              </motion.li>
            ))}
          </ul>
        </NavList>
        <NavFooter></NavFooter>
        <NavVideos>
          <motion.div
            animate={{ width: revealVideo.show ? 0 : '100%' }}
            className="reveal"
          ></motion.div>
          <div className="video">
            <AnimatePresence initial={false}>
              <motion.video
                initial={{ opacity: 0 }}
                exit={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{
                  duration: 0.2,
                  ease: 'easeInOut',
                }}
                key={revealVideo.key}
                loop
                autoPlay
                muted
              >
                <source src={video.default} type="video/mp4" />
              </motion.video>
            </AnimatePresence>
          </div>
        </NavVideos>
      </Container>
    </Nav>
  );
};
