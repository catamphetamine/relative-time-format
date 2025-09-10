import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'doi';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;