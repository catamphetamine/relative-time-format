import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'se';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;