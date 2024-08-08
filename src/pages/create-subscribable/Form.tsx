import { useForm } from "react-hook-form";
import styled from "styled-components";
import { endpoint } from "../../utils/endpoint";

const FormComponent = styled.form`
  max-width: 500px;
  margin: 20px auto;
  padding: 20px;
  border: 1px solid #ddd;
  border-radius: 5px;
  background-color: #f9f9f9;
`;

const FormGroup = styled.div`
  margin-bottom: 15px;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
`;

const Input = styled.input`
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
`;

const Button = styled.button`
  background-color: #4caf50;
  color: white;
  border: none;
  padding: 10px 15px;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #45a049;
  }
`;

export default function Form({ data, onFormSubmit }: any) {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data: any) => {
    const url = data.id
      ? `${endpoint}/subscribable/${data.id}`
      : `${endpoint}/subscribable`;
    const method = data.id ? "PATCH" : "POST";
    const body = {
      name: data.name,
      entity: data.entity,
    };

    try {
      await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      onFormSubmit();
      reset();
    } catch (error) {
      console.error("Error submitting form:", error);
    }
  };

  return (
    <FormComponent onSubmit={handleSubmit(onSubmit)}>
      <FormGroup>
        <Label>ID (for update only):</Label>
        <Input type="text" {...register("id")} />
      </FormGroup>
      <FormGroup>
        <Label>Name:</Label>
        <Input type="text" {...register("name", { required: true })} />
      </FormGroup>
      <FormGroup>
        <Label>Entity:</Label>
        <Input type="text" {...register("entity", { required: true })} />
      </FormGroup>
      <Button type="submit">{data?.id ? "Update" : "Create"}</Button>
    </FormComponent>
  );
}
