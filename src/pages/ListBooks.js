import { TrashIcon } from "@heroicons/react/16/solid";
import { Button, Card, Typography } from "@material-tailwind/react";
import { useState, useCallback } from "react";
import { BiEdit } from "react-icons/bi";
import { TbTrash } from "react-icons/tb";
import { useNavigate } from "react-router-dom";

const TABLE_HEAD = ["Name", "Role", "Email", "Location"];

const TABLE_ROWS = [
  {
    name: "Mary Smith",
    role: "Project Manager",
    email: "mary.smith@example.com",
    location: "New York, USA",
  },
  {
    name: "Bob Johnson",
    role: "Lead Developer",
    email: "bob.johnson@example.com",
    location: "London, UK",
  },
  {
    name: "Carol White",
    role: "UX Designer",
    email: "carol.white@example.com",
    location: "Berlin, Germany",
  },
  {
    name: "David Brown",
    role: "QA Engineer",
    email: "david.brown@example.com",
    location: "Sydney, Australia",
  },
];

export default function ListBooks({ books, handelDelete }) {
  const router = useNavigate();
  return (
    <div className="container mx-auto">
      <div className="flex justify-center items-center h-screen mx-auto">
        <Card className=" w-full overflow-scroll px-6">
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                <th className="border-b border-gray-300 pb-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    Id
                  </Typography>
                </th>
                <th className="border-b border-gray-300 pb-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    Book Name
                  </Typography>
                </th>
                <th className="border-b border-gray-300 pb-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    Description
                  </Typography>
                </th>
                <th className="border-b border-gray-300 pb-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    Author
                  </Typography>
                </th>
                <th className="border-b border-gray-300 pb-4 pt-10">
                  <Typography
                    variant="small"
                    color="blue-gray"
                    className="font-bold leading-none"
                  >
                    Action
                  </Typography>
                </th>
              </tr>
            </thead>
            <tbody>
              {books.map(({ name, descreption, author, id }, index) => {
                const isLast = index === TABLE_ROWS.length - 1;
                const classes = isLast
                  ? "py-4"
                  : "py-4 border-b border-gray-300";

                return (
                  <tr key={name} className="hover:bg-gray-50">
                    <td className={classes}>
                      <Typography
                        variant="small"
                        color="blue-gray"
                        className="font-bold"
                      >
                        {id}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        {name}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        {descreption}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        {author}
                      </Typography>
                    </td>
                    <td className={classes}>
                      <Typography
                        variant="small"
                        className="font-normal text-gray-600"
                      >
                        <div className="flex gap-x-4">
                          <Button
                            color="green"
                            onClick={() => router("/edit/" + id)}
                          >
                            <BiEdit />
                          </Button>
                          <Button color="red" onClick={() => handelDelete(id)}>
                            <TbTrash />
                          </Button>
                        </div>
                      </Typography>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </Card>
      </div>
    </div>
  );
}
