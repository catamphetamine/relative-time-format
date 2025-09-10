import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'kaa';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;