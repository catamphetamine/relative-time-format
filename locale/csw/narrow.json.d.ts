import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'csw';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;