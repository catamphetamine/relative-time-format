import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'doi';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;