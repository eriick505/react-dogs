import React from "react";

import Head from "../../Head/Head";
import Loading from "../../Helper/Loading/Loading";
import Error from "../../Helper/Error/Error";
import UserStatsGraphs from "../UserStatsGraphs/UserStatsGraphs";

import { STATS_GET } from "../../../api";
import useFetch from "../../../Hooks/useFetch";

function UserStats() {
  const { data, error, loading, request } = useFetch();

  React.useEffect(() => {
    async function getData() {
      const { url, options } = STATS_GET();
      await request(url, options);
    }
    getData();
  }, [request]);

  if (loading) return <Loading />;
  if (error) return <Error error={error} />;
  if (data)
    return (
      <div>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </div>
    );
  else return null;
}

export default UserStats;
