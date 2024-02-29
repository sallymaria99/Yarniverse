import { useForm, SubmitHandler } from "react-hook-form";
import { ProjektSchema } from "../projektData";
import { useNavigate } from "react-router-dom";
import { useProjekt } from "../context/ProjektContext";
import styled, { css } from "styled-components";

function NewProjectPage() {
  const { addProjekt } = useProjekt();
  const navigate = useNavigate();

  const { register, handleSubmit, reset } = useForm<ProjektSchema>();

  const onSubmit: SubmitHandler<ProjektSchema> = (data) => {
    const newProjekt: ProjektSchema = {
      ...data,
      knittingNeedle: Number(data.knittingNeedle),
    };
    console.log(newProjekt);
    addProjekt(newProjekt);
    reset();
    navigate("/projekt");
  };

  return (
    <Container>
      <Title>Starta ett projekt</Title>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <FormRow>
          <Column>
            <FormGroup>
              <Label htmlFor="to">Till:</Label>

              <Input
                {...register("to")}
                type="text"
                id="to"
                placeholder="PlaceHolder"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="size">Storlek:</Label>
              <Input
                {...register("size")}
                type="text"
                id="size"
                placeholder="PlaceHolder"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="yarn">Garn:</Label>
              <Input
                {...register("yarn")}
                type="text"
                id="yarn"
                placeholder="PlaceHolder"
              />
            </FormGroup>

            <FormGroup>
              <Label htmlFor="knittingNeedle">Stickor:</Label>
              <Select
                {...register("knittingNeedle")}
                name=""
                id="knittingNeedle"
              >
                <option value="2">2</option>
                <option value="2.5">2.5</option>
              </Select>
            </FormGroup>
          </Column>
          <Column>
            <FormGroup>
              <Label htmlFor="namne">Namn:</Label>
              <Input {...register("name")} type="text" id="name" />
            </FormGroup>

            <div className="bg-white px-8 pt-6 pb-8 mb-4">
              <Label htmlFor="notes">Anteckningar</Label>
              <TextArea
                {...register("notes")}
                id="notes"
                cols={28}
                rows={5}
              ></TextArea>
            </div>
          </Column>
          <Column>
            <FormGroup>
              <Label htmlFor="status">Status:</Label>
              <Select {...register("status")} id="status">
                <option value="planerade">Planerad</option>
                <option value="pågående">Pågående</option>
                <option value="pausade">Pausad</option>
                <option value="avslutade">Avslutad</option>
              </Select>
            </FormGroup>
            <FormGroup>
              <div className="bg-white px-8 pt-6 pb-8 mb-4 w-1/3">
                {/* Höger Innehåll */}
                <div>
                  <Label htmlFor="startDate">Påbörjat</Label>
                  <DateInput
                    {...register("startDate", { valueAsDate: true })}
                    type="date"
                    id="startDate"
                  />
                </div>
                <div>
                  <Label htmlFor="endDate">Avslutat</Label>
                  <DateInput
                    {...register("endDate", { valueAsDate: true })}
                    type="date"
                    id="endDate"
                  />
                </div>
              </div>
            </FormGroup>
          </Column>
        </FormRow>
        <Button type="submit">Spara!</Button>
      </Form>
    </Container>
  );
}

export default NewProjectPage;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
`;

const FormRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  max-width: 1024px;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
  }
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 8px;

  &:first-child {
    flex: 1;
  }

  &:nth-child(2) {
    flex: 1;
    margin: 0 20px;
  }

  &:last-child {
    flex: 1;
  }
`;

const Title = styled.div`
  font-size: 1.5rem;
  text-align: center;
  padding-top: 2rem;
  padding-bottom: 1.5rem;
`;

const Form = styled.form`
  background-color: white;
  border-radius: 0.25rem;
  padding: 1.5rem 2rem 2rem 2rem 2rem;
  margin-bottom: 1rem;
  width: 80%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const FormGroup = styled.div`
  margin-bottom: 1rem;
`;

const Label = styled.label`
  display: block;
  color: #4a5568;
  font-weight: 700;
  margin-bottom: 0.5rem;
  font-size: 0.875rem /* 14px */;
  line-height: 1.25rem /* 20px */;
`;

const Button = styled.button`
  background-color: #243d24;
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 2rem;
  max-width: 120px;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2b6cb0;
  }
`;

const baseInputStyles = css`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #bacee8;
  border-radius: 0.25rem;
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  width: 100%;
  appearance: none;
  line-height: 1.25;
  color: black;

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.5);
  }
`;

const Input = styled.input`
  ${baseInputStyles}
  height: 40px;
`;

const Select = styled.select`
  ${baseInputStyles}
  cursor: pointer;
  position: relative;
`;

const TextArea = styled.textarea`
  ${baseInputStyles}
`;

const DateInput = styled.input`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #bacee8;
  border-radius: 0.25rem;
  cursor: pointer;
  margin-bottom: 28px;
  padding: 0.5rem 0.75rem 0.5rem 0.75rem;
  &:before {
    display: inline-block;
    margin-right: 10px;
  }
`;
