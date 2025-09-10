import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'csw';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;