import React from "react";

import Head from "../../Head/Head";
import Loading from "../../Helper/Loading/Loading";
import Error from "../../Helper/Error/Error";

import { STATS_GET } from "../../../api";
import useFetch from "../../../Hooks/useFetch";

const UserStatsGraphs = React.lazy(() =>
  import("../UserStatsGraphs/UserStatsGraphs")
);

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
      <React.Suspense fallback={<div></div>}>
        <Head title="Estatísticas" />
        <UserStatsGraphs data={data} />
      </React.Suspense>
    );
  else return null;
}

export default UserStats;
