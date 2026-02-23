import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'tyv';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;