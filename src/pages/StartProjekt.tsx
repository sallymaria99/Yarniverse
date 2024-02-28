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
        <div className="flex justify-between items-start w-full max-w-6x1">
          <div>
            <h3 className="font-bold text-lg mb-5">Detaljer</h3>

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
          </div>

          <FormGroup>
            <Label htmlFor="namne">Namn:</Label>
            <Input {...register("name")} type="text" id="name" />
          </FormGroup>

          <div className="bg-white px-8 pt-6 pb-8 mb-4">
            <Label htmlFor="notes">Anteckningar</Label>
            <TextArea
              {...register("notes")}
              id="notes"
              cols={20}
              rows={5}
            ></TextArea>
          </div>

          <FormGroup>
            <Label htmlFor="status">Status:</Label>
            <Select {...register("status")} id="status">
              <option value="planerade">Planerad</option>
              <option value="pågående">Pågående</option>
              <option value="pausade">Pausad</option>
              <option value="avslutade">Avslutad</option>
            </Select>
          </FormGroup>

          <div className="bg-white px-8 pt-6 pb-8 mb-4 w-1/3">
            {/* Höger Innehåll */}
            <div>
              <Label htmlFor="startDate">Påbörjat</Label>
              <Input
                {...register("startDate", { valueAsDate: true })}
                type="date"
                id="startDate"
              />
            </div>
            <div>
              <Label htmlFor="endDate">Avslutat</Label>
              <Input
                {...register("endDate", { valueAsDate: true })}
                type="date"
                id="endDate"
              />
            </div>
          </div>
        </div>
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
  width: 33.333%;
  display: flex;
  flex-direction: column;
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
  background-color: #4299e1;
  color: white;
  font-weight: bold;
  padding: 0.75rem 1.5rem;
  border: none;
  border-radius: 0.25rem;
  margin-top: 1rem;
  cursor: pointer;
  transition: background-color 0.3s;
  &:hover {
    background-color: #2b6cb0;
  }
`;

const baseInputStyles = css`
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
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
`;

const Select = styled.select`
  ${baseInputStyles}
`;

const TextArea = styled.textarea`
  ${baseInputStyles}
`;
