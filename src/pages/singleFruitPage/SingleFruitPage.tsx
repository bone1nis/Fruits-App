import { ReactElement, useState } from "react";
import { Link, useParams } from "react-router";

import { useAppSelector } from "../../hooks/hooks";
import { selectById } from "../../store/fruitsSlice";
import { RootState } from "../../store";

import "./singleFruitPage.scss";
import DetailedCard from "../../components/detailedCard/DetailedCard";
import EditDetailedCard from "../../components/editDetailedCard/EditDetailedCard";

const SingleFruitPage = (): ReactElement => {
  const { fruitId } = useParams() as { fruitId: string };

  const fruit = useAppSelector((state: RootState) =>
    selectById(state, fruitId)
  );

  const [showEdit, setShowEdit] = useState(false);

  const changeShowEdit = () => setShowEdit(!showEdit);

  if (!fruit) {
    return (
      <div className="single-fruit">
        <h4 className="single-fruit__title">Undefined fruit</h4>
        <Link to="/" className="btn btn__long single-fruit__btn" tabIndex={0}>
          Main Page
        </Link>
      </div>
    );
  }

  const content = showEdit ? (
    <EditDetailedCard fruit={fruit} onClose={changeShowEdit} />
  ) : (
    <DetailedCard fruit={fruit} onClose={changeShowEdit} />
  );

  return (
    <div className="single-fruit">
      {content}
      <Link to="/" className="btn btn__long single-fruit__btn" tabIndex={0}>
        Main Page
      </Link>
    </div>
  );
};

export default SingleFruitPage;
