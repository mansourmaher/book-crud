import { DivideIcon } from "@heroicons/react/16/solid";
import {
  Button,
  Card,
  CardBody,
  Input,
  Textarea,
} from "@material-tailwind/react";
import { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreateBookPage({ handelAddNewBook }) {
  const router = useNavigate();
  const [book, setBook] = useState({
    name: "",
    descreption: "",
    author: "",
  });

  const handelInputChange = useCallback((e) => {
    setBook({
      ...book,
      [e.target.name]: e.target.value,
    });
  });
  const addNewBook = useCallback(() => {
    console.log("book from createpae"+ book)
     handelAddNewBook(book);
     router("/");
  });
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen mx-auto">
        <Card className="border border-b-2 md:p-16 w-full m-8 p-4  md:w-[600px]">
          <div className="px-6">
            <h1 className="text-3xl font-semibold ">Create a new Book</h1>
            <p className="text-gray-500">
              Fill in the form below to create a new book
            </p>
          </div>
          <CardBody className="mt-8   ">
            <div className="flex flex-col space-y-8 w-full">
              <Input
                variant="standard"
                label="Book Name"
                placeholder="Enter book name"
                size="lg"
                color="light-blue"
                name="name"
                value={book.name}
                onChange={(e) => handelInputChange(e)}
              />
              <Input
                variant="standard"
                label="Book Name"
                placeholder="Enter book name"
                size="lg"
                color="light-blue"
                name="author"
                value={book.author}
                onChange={(e) => handelInputChange(e)}
                className="w-full"
              />
              <Textarea
                size="lg"
                label="Book Description"
                color="light-blue"
                name="descreption"
                value={book.descreption}
                onChange={(e) => handelInputChange(e)}
              />
            </div>
            <div className="flex w-full mt-8">
              <Button
                color="light-blue"
                buttonType="filled"
                size="regular"
                rounded={false}
                block={false}
                iconOnly={false}
                ripple="light"
                onClick={addNewBook}
                className="w-full"
              >
                Create Book
              </Button>
            </div>
          </CardBody>
        </Card>
      </div>
    </div>
  );
}
