import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'csw';
	style: 'long';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;