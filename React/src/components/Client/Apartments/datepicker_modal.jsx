import React, { useState, useEffect } from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { addMonths, format, set} from 'date-fns';


function DatePickerModal({show, handleClose, onAddRevervation}) {

        //datepicker
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());
        const [formattedStart, setFormattedStart] = useState('');
        const [formattedEnd, setformattedEnd] = useState('');
        

        const onChange = (dates) => {
            const [start, end] = dates;
            setStartDate(start);
            setEndDate(end);
            setFormattedStart(start ? format(start, 'yyyy/MM/dd') : '');
            setformattedEnd(end ? format(end, 'yyyy/MM/dd') : '');
        }

        const HandleReservation = () => {
            handleClose();
            onAddRevervation({ formattedStart, formattedEnd });
        }


    return (
    <>
        <Modal size="sm" show={show} onHide={handleClose} centered>
            <Modal.Header closeButton>
                <Modal.Title>Select Range of dates</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <div className="d-flex justify-content-center">
            <DatePicker
                selected={startDate}
                onChange={onChange}
                minDate={new Date()}
                maxDate={addMonths(new Date(), 5)}
                startDate={startDate}
                endDate={endDate}
                selectsRange
                inline
                showDisabledMonthNavigation
            />
            </div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" type="submit" onClick={HandleReservation}>
                    Save
                </Button>
            </Modal.Footer>
        </Modal>
    </>
    );
}

export default DatePickerModal;