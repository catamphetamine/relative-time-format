import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'doi';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;