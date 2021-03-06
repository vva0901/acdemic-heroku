import React, { useState, useEffect } from "react";

import Label from "../../../../theme/FormElement/Label";
import ErrorMsg from "../../../../theme/FormElement/ErrorMsg";
import Select from "../../../../theme/FormElement/Select";
import Gender from "../../../../theme/FormElement/Gender";
import Textarea from "../../../../theme/FormElement/Textarea";
import { listProgram, listStudentStatus } from "../../../../store/utils/listObj";

const Content = props => {
  const [state, setState] = useState({
    fullName: props.editDialogData.fullName,
    programmeId: props.editDialogData.programmeId,
    ssId: props.editDialogData.ssId.toString(),
    gender: props.editDialogData.gender,
    birthday: props.editDialogData.birthday,
    idCardNo: props.editDialogData.idCardNo,
    phoneNo: props.editDialogData.phoneNo,
    email: props.editDialogData.email,
    personalEmail: props.editDialogData.personalEmail,
    address: props.editDialogData.address,
    note: props.editDialogData.note
  });

  useEffect(() => {
    props.validateFullname(state.fullName)
    props.validateProgrammeId(state.programmeId)
    props.validateSsId(state.ssId)
    props.validateGender(state.gender)
    props.validateBirthday(state.birthday)
    props.validateIdCardNo(state.idCardNo)
    props.validatePhoneNo(state.phoneNo)
    props.validateEmail(state.email)
    props.validatePersonalEmail(state.personalEmail)
    props.validateAddress(state.address)
    props.validateNote(state.note)
  }, [])

  return (
    <React.Fragment>
      <div className="form editForm">
        <Label
          classes="formItem"
          labelName="Họ và tên*:"
          name="fullName"
          type="text"
          value={state.fullName}
          onChange={e => {
            setState({
              ...state,
              fullName: e.target.value
            });
          }}
          onBlur={e => props.validateFullname(e.target.value)}
        />
        <ErrorMsg error={props.fullName_err} />
        <Select
          classes="formItem"
          title="Chuyên nghành*:"
          value={state.programmeId}
          list={listProgram}
          onChange={e => {
            setState({
              ...state,
              programmeId: e.target.value
            });
            props.validateProgrammeId(e.target.value)
          }} 
        />
        <ErrorMsg error={props.programmeId_err} />
        <Select
          classes="formItem"
          title="Trạng thái*:"
          value={state.ssId}
          list={listStudentStatus}
          onChange={e => {
            setState({
              ...state,
              ssId: e.target.value
            });
            props.validateSsId(e.target.value)
          }}
        />
        <ErrorMsg error={props.ssId_err} />
        <Gender
          defaultChecked={false}
          maleCheck={state.gender === "M" ? true : false}
          femaleCheck={state.gender === "F" ? true : false}
          onChange={e => {
            setState({
              ...state,
              gender: e.target.value
            });
            props.validateGender(e.target.value);
          }}
        />
        <Label
          classes="formItem"
          labelName="Ngày sinh*:"
          name="birthday"
          type="text"
          placeholder='nhập ngày / tháng / năm  vd: "31/12/1999"'
          value={state.birthday}
          onChange={e => {
            setState({
              ...state,
              birthday: e.target.value
            });
          }}
          onBlur={e => props.validateBirthday(e.target.value)}
        />
        <ErrorMsg error={props.birthday_err} />
        <Label
          labelName="Số CMND:"
          classes="formItem"
          name="idCardNo"
          type="text"
          value={state.idCardNo}
          onChange={e => {
            setState({
              ...state,
              idCardNo: e.target.value
            });
          }}
          onBlur={e => props.validateIdCardNo(e.target.value)}
        />
        <ErrorMsg error={props.idCardNo_err} />
        <Label
          labelName="Số điện thoại:"
          classes="formItem"
          name="phoneNo"
          type="text"
          value={state.phoneNo}
          onChange={e => {
            setState({
              ...state,
              phoneNo: e.target.value
            });
          }}
          onBlur={e => props.validatePhoneNo(e.target.value)}
        />
        <ErrorMsg error={props.phoneNo_err} />
        <Label
          labelName="Email:"
          classes="formItem"
          name="email"
          type="text"
          value={state.email}
          onChange={e => {
            setState({
              ...state,
              email: e.target.value
            });
          }}
          onBlur={e => props.validateEmail(e.target.value)}
        />
        <ErrorMsg error={props.email_err} />
        <Label
          labelName="Email cá nhân:"
          classes="formItem"
          name="personalEmail"
          type="text"
          value={state.personalEmail}
          onChange={e => {
            setState({
              ...state,
              personalEmail: e.target.value
            });
          }}
          onBlur={e => props.validatePersonalEmail(e.target.value)}
        />
        <ErrorMsg error={props.personalEmail_err} />
        <Textarea
          classes="formItem"
          labelName="Địa chỉ:"
          rows={2}
          value={state.address}
          onChange={e => {
            setState({
              ...state,
              address: e.target.value
            });
          }}
          onBlur={e => props.validateAddress(e.target.value)}
        />
        <Textarea
          classes="formItem"
          labelName="Ghi chú:"
          rows={2}
          value={state.note}
          onChange={e => {
            setState({
              ...state,
              note: e.target.value
            });
          }}
          onBlur={e => props.validateNote(e.target.value)}
        />
      </div>
    </React.Fragment>
  );
};

export default Content;
