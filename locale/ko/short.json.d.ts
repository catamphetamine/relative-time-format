import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'ko';
	style: 'short';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;