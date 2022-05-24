import { Labels } from '../../index';

type LocaleLabelsForStyle = Labels & {
	locale: 'pt-GW';
	style: 'narrow';
};

declare const localeLabels: LocaleLabelsForStyle;
export default localeLabels;