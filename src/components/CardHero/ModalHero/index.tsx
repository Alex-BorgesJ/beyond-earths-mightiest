import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import { IModalCard } from "./@types";
import { useGetHeroeByCharacterId } from "../../../service/query/useGetHeroeByCharacterId";
import { Col, Row } from "react-bootstrap";
import Image from "react-bootstrap/Image";

export function MyVerticallyCenteredModal({
  id,
  handleClose,
  show,
}: IModalCard) {
  const { data } = useGetHeroeByCharacterId(id);

  return (
    <>
      <Modal
        size="lg"
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          {data?.data.results.map((heroes) => (
            <Modal.Title id="contained-modal-title-vcenter">
              {heroes.name}
            </Modal.Title>
          ))}
        </Modal.Header>
        <Modal.Body>
          <Row>
            <Col xs={6} md={4}>
              {data?.data.results.map((heroes) => {
                const imageUrl = `${heroes.thumbnail?.path}/portrait_medium.${heroes.thumbnail?.extension}`;
                return <Image src={imageUrl} thumbnail />;
              })}
            </Col>
            <Col xs={6} md={4}>
              {data?.data.results.map((heroes) => (
                <p key={heroes.id}>{heroes.description}</p>
              ))}
            </Col>
          </Row>
        </Modal.Body>
        <Modal.Footer>
          <Button onClick={handleClose}>Close</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
