import { TLinks } from "./links.interface";
import { Links } from "./links.model";

const createLinkInDB = async (payload: TLinks) => {
  return await Links.create(payload);
};

const getAllLinksFromDB = async () => {
  return await Links.find();
};

const getLinkByIdFromDB = async (id: string) => {
  return await Links.findById(id);
};

const updateLinkInDB = async (id: string, payload: Partial<TLinks>) => {
  return await Links.findByIdAndUpdate(id, payload, {
    new: true,
    runValidators: true,
  });
};

const deleteLinkFromDB = async (id: string) => {
  return await Links.findByIdAndDelete(id);
};

export const LinksService = {
  createLinkInDB,
  getAllLinksFromDB,
  getLinkByIdFromDB,
  updateLinkInDB,
  deleteLinkFromDB,
};
